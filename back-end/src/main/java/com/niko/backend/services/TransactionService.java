package com.niko.backend.services;

import com.niko.backend.DTOs.MonthlySummaryDTO;
import com.niko.backend.DTOs.TransactionDTO;
import com.niko.backend.entities.Transaction;
import com.niko.backend.mappers.TransactionMapper;
import com.niko.backend.repositories.TransactionRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.YearMonth;
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

    public MonthlySummaryDTO getMonthlySummary(int year, int month) {
        YearMonth yearMonth = YearMonth.of(year, month);
        LocalDateTime startDate = yearMonth.atDay(1).atStartOfDay();
        LocalDateTime endDate = yearMonth.atEndOfMonth().atStartOfDay();
        return transactionRepository.findMonthlySummary(startDate, endDate);
    }

    public List<Transaction> findAll() {
        return transactionRepository.findAll();
    }
}
