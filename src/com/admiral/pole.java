package com.admiral;

import java.util.Arrays;

public class pole {
	fiska [][] pole1 = new fiska [14][14];

	public pole() {
		for (int i = 0; i < 14; i++)
			for (int j = 0; j < 14; j++) {
				pole1[i][j] = new fiska();
			}
	}

	@Override
	public String toString() {
		return "pole [pole1=" + Arrays.toString(pole1) + "]";
	}
	
}
