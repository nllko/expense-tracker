package com.niko.backend.DTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BalancesDTO {
    private String year;
    private String month;
    private String totalBalance;
    private String totalExpenses;
    private String totalIncome;

    public BalancesDTO(int year, int month, BigDecimal totalBalance, BigDecimal totalExpenses, BigDecimal totalIncome) {
        this.year = String.valueOf(year);
        this.month = String.valueOf(month);
        this.totalBalance = String.valueOf(totalBalance);
        this.totalExpenses = String.valueOf(totalExpenses);
        this.totalIncome = String.valueOf(totalIncome);
    }
}
