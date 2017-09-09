package com.admiral;

public class fiska {
	private boolean kletka;
	private int igrok;
	private int sila;
	private boolean visibility;
	
	public fiska(){
		this.kletka=false;
		this.igrok =0;
		this.sila = 0;
		this.visibility = false;
	}
	

	public fiska(boolean kletka, int igrok, int sila, boolean visibility) {
		this.kletka = kletka;
		this.igrok = igrok;
		this.sila = sila;
		this.visibility = visibility;
	}

	public int isIgrok() {
		return igrok;
	}
	public void setIgrok(int igrok) {
		this.igrok = igrok;
	}
	public int getSila() {
		return sila;
	}
	public void setSila(int sila) {
		this.sila = sila;
	}
	public boolean isVisibility() {
		return visibility;
	}
	public void setVisibility(boolean visibility) {
		this.visibility = visibility;
	}
	
	
}
