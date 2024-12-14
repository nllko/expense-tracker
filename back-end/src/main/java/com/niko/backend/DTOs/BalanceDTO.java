package com.niko.backend.DTOs;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BalanceDTO {
    private String year;
    private String month;
    private String amount;
    private String type;
}
