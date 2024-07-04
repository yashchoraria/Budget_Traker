import React, {useContext} from 'react';
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core';
import {Delete, MoneyOff} from '@material-ui/icons';
import useStyles from './styles';
import { ExpenseTrackerContext } from '../../../context/context';

const List = () => {
    const classes = useStyles();

    const {deleteTransaction} = useContext(ExpenseTrackerContext);
    
    const transactions = [
        {id: 1, type: 'Income', category: 'Salary', amount: 50, date: 'Wed Dec 16'}, 
        {id: 2, type: 'Expense', category: 'Pets', amount: 50, date: 'Wed Dec 16'},
        {id: 3, type: 'Income', category: 'Business', amount: 150, date: 'Wed Dec 16'},
        {id: 4, type: 'Income', category: 'Salary', amount: 50, date: 'Wed Dec 16'},
        {id: 5, type: 'Expense', category: 'Pets', amount: 50, date: 'Wed Dec 16'},
        {id: 6, type: 'Income', category: 'Business', amount: 150, date: 'Wed Dec 16'},
        {id: 7, type: 'Income', category: 'Salary', amount: 50, date: 'Wed Dec 16'},
    ];
    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick="">
                                <Delete/>
                            </IconButton>   
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
  )
} 

export default List