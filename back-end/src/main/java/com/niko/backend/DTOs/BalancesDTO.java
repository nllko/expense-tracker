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
    private BigDecimal balance;
    private BigDecimal expenses;
    private BigDecimal income;

    public BalancesDTO(int year, int month, BigDecimal balance, BigDecimal expenses, BigDecimal income) {
        this.year = String.valueOf(year);
        this.month = String.valueOf(month);
        this.balance = balance;
        this.expenses = expenses;
        this.income = income;
    }
}
