package com.niko.backend.services;

import com.niko.backend.DTOs.BalanceDTO;
import com.niko.backend.DTOs.TransactionDTO;
import com.niko.backend.entities.Transaction;
import com.niko.backend.mappers.TransactionMapper;
import com.niko.backend.repositories.TransactionRepository;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;
    private final TransactionMapper transactionMapper = Mappers.getMapper(TransactionMapper.class);

    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public Transaction save(TransactionDTO transactionDTO) {
        return transactionRepository.save(transactionMapper.transactionDtoToTransaction(transactionDTO));
    }


    public void deleteTransactionById(Long id) {
        transactionRepository.deleteById(id);
    }

    public BalanceDTO getBalanceByPeriod(LocalDateTime startDate, LocalDateTime endDate) {
        return transactionRepository.findBalanceByPeriod(startDate, endDate);
    }

    public BalanceDTO getTotalBalance() {
        return transactionRepository.findTotalBalance();
    }

    public List<TransactionDTO> findAll() {
        List<Transaction> transactions = transactionRepository.findAllByOrderByDateDescCreatedAtDesc();
        return transactionMapper.transactionsToTransactionDTOList(transactions);

    }

    public List<TransactionDTO> geTransactionsByPeriod(LocalDateTime startDate, LocalDateTime endDate) {
        List<Transaction> transactions = transactionRepository.findByDateBetweenOrderByDateDescCreatedAtDesc(startDate, endDate);
        return transactionMapper.transactionsToTransactionDTOList(transactions);
    }
}
