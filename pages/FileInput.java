/*Sampling whatever whatever
*Simple interest
*/
import javax.util.Scanner;
public class FileInput {
    public static void main (String [] args){
        double p, r, t, i, a; //variables declared

        Scanner input = new Scanner (System.in); //input filler
System.out.println ("The Principal? ");
p = input.nextDouble();

System.out.println ("The Rate?");
r = input.nextDouble();

System.out.println ("The Time period?");
t = input.nextDouble();

//Input section done

i = (p * r * t)/100;
a = p + 1;

System.out.println ("The Simple Interest is: "+i)
System.out.println ("The amount to be paid back is: "+a);

//Display section done

    } //end of main method
} //end of class