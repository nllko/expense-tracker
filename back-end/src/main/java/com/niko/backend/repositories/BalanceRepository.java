package com.niko.backend.repositories;

import com.niko.backend.DTOs.BalancesDTO;
import com.niko.backend.entities.Balance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BalanceRepository extends JpaRepository<Balance, Long> {
    @Query(value = """
                SELECT new com.niko.backend.DTOs.BalancesDTO(
                    b.year,
                    b.month,
                    b.amount,
                    expense.amount,
                    income.amount
                )
                FROM Balance b
                LEFT JOIN Balance expense ON expense.year = b.year AND expense.month = b.month AND expense.type = 'EXPENSE'
                LEFT JOIN Balance income ON income.year = b.year AND income.month = b.month AND income.type = 'INCOME'
                WHERE b.year = :year AND b.month = :month AND b.type = 'TOTAL'
                GROUP BY b.year, b.month, b.amount, expense.amount, income.amount
            """)
    BalancesDTO findBalanceByYearAndMonth(@Param("year") int year, @Param("month") int month);
}
