package com.admiral;

public class fiska {
	private String ship ;
	private String igrok;
	private int sila;
	private boolean visibility;
	
	
	@Override
	public String toString() {
		return "fiska [ship=" + ship + ", igrok=" + igrok + ", sila=" + sila + ", visibility=" + visibility + "]";
	}

	public String getShip() {
		return ship;
	}

	public void setShip(String ship) {
		this.ship = ship;
	}

	public String getIgrok() {
		return igrok;
	}

	public void setIgrok(String igrok) {
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

	public fiska(){
		this.ship="";
		this.igrok ="";
		this.sila = 0;
		this.visibility = false;
	}
	
	public fiska(String ship, String igrok, int sila, boolean visibility) {
		this.ship = ship;
		this.igrok = igrok;
		this.sila = sila;
		this.visibility = visibility;
	}


	
}
