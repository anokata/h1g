class Mocha extends CondimentDecorator {
    public String getDescription() { 
        return base.getDescription() + ", Mocha"; 
    }

    public double cost() {
        return 0.20 + base.cost();
    }
    public static void main(String[] args) {
    }

    Mocha(Beverage b) {
        super(b);
    }
}
