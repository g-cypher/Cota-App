import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

const LogEvent = props => {
    return (
        <View>
            <Text>Log event</Text>
        </View>
    );
};

LogEvent.navigationOptions = {
    headerTitle: 'Log Event'
};

export default LogEvent;