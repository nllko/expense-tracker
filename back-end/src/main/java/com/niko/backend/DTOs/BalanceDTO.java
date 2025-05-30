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
public class BalanceDTO {
    private BigDecimal total;
    private BigDecimal expenses;
    private BigDecimal incomes;
}
