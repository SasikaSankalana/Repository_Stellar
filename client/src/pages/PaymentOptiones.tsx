import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import Input from "../components/atoms/Input/TextInput";
import DatePicker from "../components/atoms/Input/DatePicker";
import {useEffect, useState} from "react";

const PaymentOptiones = () => {
    const [email, setEmail] = useState<String>('');
    const [cardNumber, setInputCardNumber] = useState<String>('');
    const [date, setDate] = useState<Date>(new Date());
    const [CVC, setCVC] = useState<String>('');
    const [cardHolderName, setCardHolderName] = useState<String>('');

    useEffect(() => {
        console.log(email)
        console.log(cardNumber)
        console.log(date);
    },[])

    return (
        <View style={styles.background}>
            <Text style={styles.title}>Payment Options</Text>
            <View>

            </View>
            <View style={{flex: 1, flexDirection: 'column'}}>
                {/*Email*/}
                <Input label="Email" text={email} setValue={setEmail} />
                {/*Card Number*/}
                <Input label="Card Number" text={cardNumber} setValue={setInputCardNumber} />
                <View style={styles.inlineContainer}>
                    {/*date picker*/}
                    <View style={styles.internalContainer}>
                        <DatePicker setInputDatee={setDate} />
                    </View>
                    {/*CVC*/}
                    <View style={styles.internalContainer}>
                        <Input label="CVC" text={CVC} setValue={setCVC} />
                    </View>
                </View>
                {/*Card holders name*/}
                <Input label="Card Holder's Name" text={cardHolderName} setValue={setCardHolderName} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: "column",
        padding: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    },
    inlineContainer: {
        flex: 1,
        flexDirection: "row",
    },
    internalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default PaymentOptiones;