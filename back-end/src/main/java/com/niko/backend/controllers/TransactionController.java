package com.niko.backend.controllers;

import com.niko.backend.DTOs.TransactionDTO;
import com.niko.backend.entities.Transaction;
import com.niko.backend.mappers.TransactionMapper;
import com.niko.backend.services.TransactionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transactions")
public class TransactionController {

    private final TransactionService transactionService;
    private final TransactionMapper transactionMapper;

    public TransactionController(TransactionService transactionService, TransactionMapper transactionMapper) {
        this.transactionService = transactionService;
        this.transactionMapper = transactionMapper;
    }

    @PostMapping("/save")
    public Transaction saveTransaction(@RequestBody TransactionDTO dto) {
        return transactionService.save(transactionMapper.toEntity(dto));
    }

    @GetMapping("/all")
    public List<Transaction> getTransactions() {
        return transactionService.findAll();
    }
}
