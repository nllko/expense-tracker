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
public class MonthlySummaryDTO {
    private BigDecimal total;
    private BigDecimal expenses;
    private BigDecimal income;

}
