package com.niko.backend.mappers;

import com.niko.backend.DTOs.TransactionDTO;
import com.niko.backend.entities.Transaction;
import com.niko.backend.enums.TransactionType;
import org.springframework.stereotype.Component;

@Component
public class TransactionMapper {
    public Transaction toEntity(TransactionDTO transactionDTO) {
        Transaction transaction = new Transaction();
        transaction.setName(transactionDTO.getName());
        transaction.setDescription(transactionDTO.getDescription());
        transaction.setAmount(transactionDTO.getAmount());
        transaction.setType(TransactionType.valueOf(transactionDTO.getType()));
        transaction.setDate(transactionDTO.getDate());
        return transaction;
    }
}
