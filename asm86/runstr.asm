.386
RomSize    EQU   4096
NMax       EQU   50
KbdPort    EQU   09h
ACPPort    EQU   8
ACPIN      EQU   0
DELAYN     EQU   4000
BtnStart   EQU   2
BtnStop    EQU   3
BtnReset   EQU   4

Stk        SEGMENT AT 100h use16
; ࠧ��� �⥪�
           dw    1100 dup (?)
StkTop     Label Word
Stk        ENDS

Data       SEGMENT at 0 use16
;����� ࠧ������� ���ᠭ�� ��६�����
           ;������ ��ப� 10
string     db   10 dup (?) 
delayc     db   ?
KbdImage   DB   4 DUP(?)
EmpKbd     DB   ?
KbdErr     DB   ?
NextDig    DB   ?
InputPos   DB   ?
Data       ENDS

Code       SEGMENT use16
           ASSUME cs:Code,ds:Data,es:Code,ss:Stk

;����� ࠧ������� ���ᠭ�� ����⠭�
           ;��ࠧ� �������� ��� �� 0 �� 9
Image      db    03Fh,00Ch,076h,05Eh,04Dh,05Bh,07Bh,00Eh,07Fh,05Fh

Start:
    mov   ax, Data
    mov   ds, ax
    mov   ax, Code
    mov   es, ax
    mov   ax, Stk
    mov   ss, ax
    lea   sp, StkTop
    call init

InfLoop:
;   wait start
; ���� ��� � ����������
    call  KbdInput
    call  KbdInContr
    call  NxtDigTrf
    call  InputKey
    
    in   al, KbdPort
    and  al, 80h
    jnz  InfLoop
; ���뢠�� ᪮���� �������� ��ப� � ��
    call acp_spd
    call Delay
    call display_digits

; ��� 
    jmp   InfLoop


init proc
    mov   si, 0
    mov   di, LENGTH string
    mov   al, 0
    FillLoop:
    mov   string+di, al
    dec   di
    jnz   FillLoop

    mov   di, 0 ; index
    mov   dx, 0
    mov   KbdErr, 0
    mov   InputPos, 0
    ret
init endp

display_digits     proc near
    mov   dx, 0
    lea   bx, Image    ;bx - 㪠��⥫� �� ���ᨢ ��ࠧ��
    mov   dl, string+di   ; ����㦠�� ���祭�� ���� �� �⮪�
    add   bx, dx      ; ����塞 ���� ��ࠧ� ����
    mov   al,es:[bx]     ; �뢮��� ���� �� ��������
    out   0, al
    ; ���� ���
    add   di, 1
    lea   bx, Image
    mov   dl, string+di   
    sub   di, 1
    add   bx, dx
    mov   al,es:[bx]     ; �뢮��� ���� �� ��������
    out   1,al
    ; ����� ���
    add   di, 2
    lea   bx, Image
    mov   dl, string+di   
    sub   di, 2
    add   bx, dx
    mov   al,es:[bx]     ; �뢮��� ���� �� ��������
    out   2,al
    ; �⢥��� ���
    add   di, 3
    lea   bx, Image
    mov   dl, string+di   
    sub   di, 3
    add   bx, dx
    mov   al, es:[bx]     ; �뢮��� ���� �� ��������
    out   3, al
    
    ; ᬥ頥� ������ ⥪�饣� ᨬ����
    inc   di
    cmp   di, LENGTH string - 4
    jnz   Savedi
    mov   di, 0
Savedi:
    ret
display_digits endp

acp_spd      proc  near ; out cx
    mov al, 0
    out ACPPort, al
    mov al, 1
    out ACPPort, al
    waitrdy:
    in al, ACPPort
    test al, 1
    jz waitrdy
    in al, ACPIN
    mov  delayc, al
    mov  cx, 0
    mov  cl, al
    ret
acp_spd      endp

Delay      proc  near ; param cx=count
    inc   cx
    not   cl
    add   ax, DELAYN
LoopTen:
    push  cx
DelayLoop:
    inc   cx
    dec   cx
    loop  DelayLoop
    pop   cx
    dec   ax
    jnz   LoopTen
    ret
Delay      endp

InputKey proc    
    cmp   KbdErr,0FFh
    jz    no_data
    cmp   EmpKbd,0FFh
    jz    no_data
    xor   ah,ah
    mov   al, NextDig
    lea   bx, string
    add   bl, InputPos
    mov   [bx], al
    inc   InputPos
    mov   al, InputPos
    cmp   al, LENGTH string
    jl    no_data
    mov   InputPos, 0
no_data:
    ret
InputKey endp


VibrDestr  PROC  NEAR
VD1:       mov   ah,al       ;���࠭���� ��室���� ���ﭨ�
           mov   bh,0        ;���� ����稪� ����७��
VD2:       in    al,dx       ;���� ⥪�饣� ���ﭨ�
           cmp   ah,al       ;����饥 ���ﭨ�=��室����?
           jne   VD1         ;���室, �᫨ ���
           inc   bh          ;���६��� ����稪� ����७��
           cmp   bh,NMax     ;����� �ॡ����?
           jne   VD2         ;���室, �᫨ ���
           mov   al,ah       ;����⠭������� ���⮯�������� ������
           ret
VibrDestr  ENDP

KbdInput   PROC  NEAR
           lea   si,KbdImage         ;����㧪� ����,
           mov   cx,LENGTH KbdImage  ;����稪� 横���
           mov   bl,0FEh             ;� ����� ��室��� ��ப�
KI4:       mov   al,bl       ;�롮� ��ப�
           out   KbdPort,al  ;��⨢��� ��ப�
           in    al,KbdPort  ;���� ��ப�
           and   al,0Fh      ;����祭�?
           cmp   al,0Fh
           jz    KI1         ;���室, �᫨ ���
           mov   dx,KbdPort  ;��।�� ��ࠬ���
           call  VibrDestr   ;��襭�� �ॡ����
           mov   [si],al     ;������ ��ப�
KI2:       in    al,KbdPort  ;���� ��ப�
           and   al,0Fh      ;�몫�祭�?
           cmp   al,0Fh
           jnz   KI2         ;���室, �᫨ ���
           call  VibrDestr   ;��襭�� �ॡ����
           jmp   SHORT KI3
KI1:       mov   [si],al     ;������ ��ப�
KI3:       inc   si          ;����䨪��� ����
           rol   bl,1        ;� ����� ��ப�
           loop  KI4         ;�� ��ப�? ���室, �᫨ ���
           ret
KbdInput   ENDP

KbdInContr PROC  NEAR
           lea   bx,KbdImage ;����㧪� ����
           mov   cx,4        ;� ����稪� ��ப
           mov   EmpKbd,0    ;���⪠ 䫠���
           mov   KbdErr,0
           mov   dl,0        ;� ������⥫�
KIC2:      mov   al,[bx]     ;�⥭�� ��ப�
           mov   ah,4        ;����㧪� ����稪� ��⮢
KIC1:      shr   al,1        ;�뤥����� ���
           cmc               ;������� ���
           adc   dl,0
           dec   ah          ;�� ���� � ��ப�?
           jnz   KIC1        ;���室, �᫨ ���
           inc   bx          ;����䨪��� ���� ��ப�
           loop  KIC2        ;�� ��ப�? ���室, �᫨ ���
           cmp   dl,0        ;������⥫�=0?
           jz    KIC3        ;���室, �᫨ ��
           cmp   dl,1        ;������⥫�=1?
           jz    KIC4        ;���室, �᫨ ��
           mov   KbdErr,0FFh ;��⠭���� 䫠�� �訡��
           jmp   SHORT KIC4
KIC3:      mov   EmpKbd,0FFh ;��⠭���� 䫠�� ���⮩ ����������
KIC4:      ret
KbdInContr ENDP

NxtDigTrf  PROC  NEAR
           cmp   EmpKbd,0FFh ;����� ���������?
           jz    NDT1        ;���室, �᫨ ��
           cmp   KbdErr,0FFh ;�訡�� ����������?
           jz    NDT1        ;���室, �᫨ ��
           lea   bx,KbdImage ;����㧪� ����
           mov   dx,0        ;���⪠ ������⥫�� ���� ��ப� � �⮫��
NDT3:      mov   al,[bx]     ;�⥭�� ��ப�
           and   al,0Fh      ;�뤥����� ���� ����������
           cmp   al,0Fh      ;��ப� ��⨢��?
           jnz   NDT2        ;���室, �᫨ ��
           inc   dh          ;���६��� ���� ��ப�
           inc   bx          ;����䨪��� ����
           jmp   SHORT NDT3
NDT2:      shr   al,1        ;�뤥����� ��� ��ப�
           jnc   NDT4        ;��� ��⨢��? ���室, �᫨ ��
           inc   dl          ;���६��� ���� �⮫��
           jmp   SHORT NDT2
NDT4:      mov   cl,2        ;��ନ஢��� ����筮�� ���� ����
           shl   dh,cl
           or    dh,dl
           mov   NextDig,dh  ;������ ���� ����
NDT1:      ret
NxtDigTrf  ENDP

;� ᫥���饩 ��ப� ����室��� 㪠���� ᬥ饭�� ���⮢�� �窨
           org   RomSize-16
           ASSUME cs:NOTHING
           jmp   Far Ptr Start
Code       ENDS
END
