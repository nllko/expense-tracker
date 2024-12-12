package com.niko.backend.DTOs;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TransactionDTO {
    private String name;
    private String description;
    private String amount;
}
