package com.niko.backend.services;

import com.niko.backend.DTOs.BalanceDTO;
import com.niko.backend.DTOs.BalancesDTO;
import com.niko.backend.entities.Balance;
import com.niko.backend.mappers.BalanceMapper;
import com.niko.backend.repositories.BalanceRepository;
import org.springframework.stereotype.Service;

@Service
public class BalanceService {
  private final BalanceRepository balanceRepository;
  private final BalanceMapper balanceMapper;

  public BalanceService(BalanceRepository balanceRepository, BalanceMapper balanceMapper) {
    this.balanceRepository = balanceRepository;
    this.balanceMapper = balanceMapper;
  }

  public BalancesDTO getBalanceByYearAndMonth(int year, int month) {
    return balanceRepository.findBalanceByYearAndMonth(year, month);
  }

  public Balance saveBalance(BalanceDTO balancesDTO) {
    return balanceRepository.save(balanceMapper.toEntity(balancesDTO));
  }
}
