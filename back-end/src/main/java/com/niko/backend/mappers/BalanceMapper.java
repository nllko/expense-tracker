package com.niko.backend.mappers;

import com.niko.backend.DTOs.BalanceDTO;
import com.niko.backend.entities.Balance;
import com.niko.backend.enums.BalanceType;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class BalanceMapper {
  public Balance toEntity(BalanceDTO dto) {
    Balance balance = new Balance();
    balance.setYear(Integer.parseInt(dto.getYear()));
    balance.setMonth(Integer.parseInt(dto.getMonth()));
    balance.setAmount(parseString(dto.getAmount()));
    balance.setType(BalanceType.valueOf(dto.getType()));
    return balance;
  }

  private BigDecimal parseString(String string) {
    return new BigDecimal(string);
  }

}
