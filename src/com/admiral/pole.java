package com.admiral;

import java.time.LocalDateTime;
import java.util.Arrays;


public class pole {
	LocalDateTime date;
	String player1;
	String player2;
	fiska [][] pole ;

	
	public pole(String player1) {
		this.player1 = player1;
		this.player2 = "";
		this.date= LocalDateTime.now();
		this.pole = new fiska [14][14];
	}

	/*public pole() {
		for (int i = 0; i < 14; i++)
			for (int j = 0; j < 14; j++) {
				pole[i][j] = new fiska();
			}
	}*/

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public void Print() {
		System.out.println(player1);
		System.out.println(player2);
		System.out.println(date);
		for (int i = 0; i < pole.length; i++) {
			for (int j = 0; j < pole[i].length; j++) {
				System.out.print(pole[i][j] + "\t");
			}
			System.out.println();
		}
	}

	public fiska[][] getPole() {
		return pole;
	}

	public void setPole(fiska fiska, int x, int y) {
		this.pole[x][y] = fiska;
	}

	public String getPlayer1() {
		return player1;
	}

	public void setPlayer1(String player1) {
		this.player1 = player1;
	}

	public String getPlayer2() {
		return player2;
	}

	public void setPlayer2(String player2) {
		this.player2 = player2;
	}

}
