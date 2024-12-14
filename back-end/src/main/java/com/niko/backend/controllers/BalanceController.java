package com.niko.backend.controllers;

import com.niko.backend.DTOs.BalanceDTO;
import com.niko.backend.DTOs.BalancesDTO;
import com.niko.backend.entities.Balance;
import com.niko.backend.services.BalanceService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/balance")
public class BalanceController {
  private final BalanceService balanceService;

  public BalanceController(BalanceService balanceService) {
    this.balanceService = balanceService;
  }

  @GetMapping("/get")
  public BalancesDTO getBalanceByYearAndMonth(@RequestParam int year, @RequestParam int month) {
    return balanceService.getBalanceByYearAndMonth(year, month);
  }

  @PostMapping("/save")
  public Balance saveBalance(@RequestBody BalanceDTO balanceDTO) {
    return balanceService.saveBalance(balanceDTO);
  }
}
