package com.niko.backend.controllers;

import com.niko.backend.DTOs.MonthlySummaryDTO;
import com.niko.backend.DTOs.TransactionDTO;
import com.niko.backend.entities.Transaction;
import com.niko.backend.services.TransactionService;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/summary")
    public MonthlySummaryDTO getMonthlySummary(@RequestParam int year, @RequestParam int month) {
        return transactionService.getMonthlySummary(year, month);
    }

    @GetMapping("/all")
    public List<Transaction> getTransactions() {
        return transactionService.findAll();
    }
}
