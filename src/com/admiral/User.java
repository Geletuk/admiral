package com.admiral;
import org.springframework.stereotype.Component;
@Component
public class User {
 
    private String name;
    private String password;
    int chip_amount[]= {1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
    
    public String getName() {
        return name;
    }
 
    public void setName(String name) {
        this.name = name;
    }
 
    public String getPassword() {
        return password;
    }
 
    public void setPassword(String password) {
        this.password = password;
    }

	public int[] getChip_amount() {
		return chip_amount;
	}

	public void setChip_amount(int[] chip_amount) {
		this.chip_amount = chip_amount;
	}
    
    
}
