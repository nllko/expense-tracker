package com.niko.backend.services;

import com.niko.backend.DTOs.BalanceDTO;
import com.niko.backend.DTOs.TransactionDTO;
import com.niko.backend.entities.Transaction;
import com.niko.backend.mappers.TransactionMapper;
import com.niko.backend.repositories.TransactionRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;
    private final TransactionMapper transactionMapper;

    public TransactionService(TransactionRepository transactionRepository, TransactionMapper transactionMapper) {
        this.transactionRepository = transactionRepository;
        this.transactionMapper = transactionMapper;
    }

    public Transaction save(TransactionDTO transactionDTO) {
        return transactionRepository.save(transactionMapper.toEntity(transactionDTO));
    }

    public BalanceDTO getBalanceByPeriod(LocalDateTime startDate, LocalDateTime endDate) {
        return transactionRepository.findBalanceByPeriod(startDate, endDate);
    }

    public BalanceDTO getTotalBalance() {
        return transactionRepository.findTotalBalance();
    }

    public List<Transaction> findAll() {
        return transactionRepository.findAll();
    }

    public List<Transaction> geTransactionsByPeriod(LocalDateTime startDate, LocalDateTime endDate) {
        return transactionRepository.findByDateBetween(startDate, endDate);
    }
}
