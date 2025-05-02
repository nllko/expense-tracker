package com.niko.backend.DTOs;

import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
public class TransactionDTO {
    private Long id;
    private String name;
    private String description;
    private BigDecimal amount;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDateTime date;
    private String type;
}
