using System;
using System.IO;
using System.Collections;

namespace game
{
	class Game
	{
		static Player player = new Player ();
		public static void Main (string[] args)
		{
			Console.Clear ();
			Console.CursorVisible = false;

			player.teleport(10,20);

			player.draw ();
			inConsoleWindow (0, 0);
			keyProcessAndRepaint ();
		}

		public static void draw(){
			Console.Clear ();
			player.draw ();


		}

		public static void keyProcessAndRepaint(){
			bool exit = false;
			player.draw ();
			while (!exit) {
				ConsoleKeyInfo keyInfo = Console.ReadKey (true);
				char keyChar = keyInfo.KeyChar;
				ConsoleKey key = keyInfo.Key;
				switch (keyChar) {
				case 'q':
					exit = true;
					break;
				
				}
				switch (key) {
				case ConsoleKey.LeftArrow:
					player.move (MoveDirection.Left);
					break;
				case ConsoleKey.RightArrow:
					player.move (MoveDirection.Right);
					break;
				case ConsoleKey.UpArrow:
					player.move (MoveDirection.Up);
					break;
				case ConsoleKey.DownArrow:
					player.move (MoveDirection.Down);
					break;
				}
				//
				//player.draw ();
				Game.draw ();
			}
		}
		public static bool inConsoleWindow (int x, int y) {
			return (x<Console.WindowWidth && x>=0 && y>=0 && y<Console.WindowHeight);
		}

	}

	class GameObj {
		protected int x;
		protected int y;
		protected char symbol='.';
		protected bool passable = true;
		protected ConsoleColor bkcolor = ConsoleColor.Black;
		protected ConsoleColor fgcolor = ConsoleColor.Blue;
		protected void draw(){
			Console.SetCursorPosition (x, y);
			Console.BackgroundColor = bkcolor;
			Console.ForegroundColor = fgcolor;
			Console.Write (symbol);

		}
	}

	class Player : GameObj {
		protected int life=1;

		new public void draw() {
			base.draw();
		}
		public void teleport(int x, int y){
			this.x = x;
			this.y = y;
		}
		public void move(MoveDirection direction){
			switch (direction) {
			case MoveDirection.Left:
				if (x>0)
				x--;
				break;
			case MoveDirection.Right:
				if (Game.inConsoleWindow(x+1,y))
				x++;
				break;
			case MoveDirection.Up:
				if (y>0)
				y--;
				break;
			case MoveDirection.Down:
				if (Game.inConsoleWindow(x,y+1))
				y++;
				break;

			}
		}
	}
	enum MoveDirection {Left, Right, Up, Down };
	//class 
}








