package com.niko.backend.mappers;

import com.niko.backend.DTOs.TransactionDTO;
import com.niko.backend.entities.Transaction;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class TransactionMapper {
    public Transaction toEntity(TransactionDTO transactionDTO) {
        Transaction transaction = new Transaction();
        transaction.setName(transactionDTO.getName());
        transaction.setDescription(transactionDTO.getDescription());
        transaction.setAmount(parseString(transactionDTO.getAmount()));
        return transaction;
    }

    private BigDecimal parseString(String string) {
        return new BigDecimal(string);
    }
}
