import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getUserTransactionsRequest} from '../../actions/actionCreator';
import styles from './Transactions.module.css';
const Transactions = (props) => {

    useEffect(() => {
        props.getUserTransactionsRequest();
    }, []);

const theadMap = () => {
    const headSchema = Object.keys(props.transactions.data[0]).filter(k => k !== 'userId');
    return headSchema.map(k => <td>{k}</td>)
}


const tbodyMap = () => {
    const headSchema = Object.keys(props.transactions.data[0]).filter(k => k !== 'userId');
    return props.transactions.data.map(trans => {
        return (<tr>{
            headSchema.map(hS => <td>{trans[hS]}</td>)
            }</tr>)
    })

}


    return (
        <table className={styles.table}>
            <thead>
                <tr>
                {props.transactions && theadMap()}
                </tr>
            </thead>
            <tbody>
                {props.transactions && tbodyMap()}
            </tbody>
        </table>
    );
}

const mapStateToProps = ({transactions}) => ({transactions})

const mapDispatchToProps = {
    getUserTransactionsRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
