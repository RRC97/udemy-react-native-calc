export default class Operator {
    value = "0";
    lastValue = "0";
    result = "";
    operation = "empty";
    lastOperation = "empty";
    component;

    getValue() {
        return this.value;
    }
    addValue(value) {
        this.value = Math.floor(parseFloat(this.value + value));
        this.component.setState({value: this.value});
    }
    clearValue() {
        if(this.operation === "empty") {
            this.lastOperation = "empty";
        }
        this.value = "0";
        this.component.setState({value: this.getValue()});
    }
    getResult() {
        return this.result + " " + this.getOperationSymbol();
    }
    
    setOperation(operation) {
        if(this.operation !== 'empty') {
            this.operate();
        } else {
            this.result = this.value;
            this.value = "0"
        }
        
        this.operation = operation;

        this.component.setState({
            value: this.getValue(),
            result: this.getResult()
        });
    }
    getOperationSymbol() {
        switch(this.operation) {
            case "sum":
                return "+";
            case "sub":
                return "+";
            case "multi":
                return "x";
            case "div":
                return "/";
            default:
                return "";
        }
    }
    clearOperation() {
    }

    operate() {
        this.lastValue = this.value;
        this.lastOperation = this.operation;

        const result = parseFloat(this.result);
        const value = parseFloat(this.value);
        switch(this.operation) {
            case "sum":
                this.result = (result + value).toString();
                break;
            case "sub":
                this.result = (result - value).toString();
                break;
            case "multi":
                this.result = (result * value).toString();
                break;
            case "div":
                this.result = (result / value).toString();
                break;
        }
        this.value = "0";
    }

    done() {
        if(this.operation === "empty") {
            this.result = this.value;
            this.value = this.lastValue;
            this.operation = this.lastOperation;
        }
        this.operate();
        this.value = this.result;
        this.result = "";
        this.operation = "empty";

        this.component.setState({
            value: this.getValue(),
            result: this.getResult()
        });
    }
    clearAll() {
        
        this.value = "0";
        this.result = "";
        this.operation = "empty";
        this.lastValue = this.value;
        this.lastOperation = this.operation;
    }
    setComponent(component) {
        this.component = component;
    }

    static instance;
}

export function useOperator() {
    if(!(Operator.instance)) {
        Operator.instance = new Operator();
    } 
    return Operator.instance;
}