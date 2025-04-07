package com.niko.backend.controllers;

import com.niko.backend.DTOs.BalanceDTO;
import com.niko.backend.DTOs.TransactionDTO;
import com.niko.backend.entities.Transaction;
import com.niko.backend.services.TransactionService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;


@RestController
@RequestMapping("/transactions")
public class TransactionController {

    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @PostMapping("/save")
    public Transaction saveTransaction(@RequestBody TransactionDTO dto) {
        return transactionService.save(dto);
    }

    @GetMapping("")
    public List<Transaction> geTransactionsByPeriod(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startDate, @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime endDate) {
        return transactionService.geTransactionsByPeriod(startDate, endDate);
    }

    @GetMapping("/all")
    public List<Transaction> geTransactions() {
        return transactionService.findAll();
    }

    @GetMapping("/balance")
    public BalanceDTO getBalanceByPeriod(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startDate, @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime endDate) {
        return transactionService.getBalanceByPeriod(startDate, endDate);
    }

    @GetMapping("/balance/total")
    public BalanceDTO getTotalBalance() {
        return transactionService.getTotalBalance();
    }
}
