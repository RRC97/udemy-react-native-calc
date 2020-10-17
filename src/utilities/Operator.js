export default class Operator {
    value = "0";
    lastValue = "0";
    result = "";
    operation = "";
    lastOperation = "";
    component;

    getValue() {
        return this.value.toString();
    }
    addValue(value) {
        if(this.value !== "0" || value === ".") {
            if(value !== "." || !this.getValue().includes(".")) {
                this.value = this.value + value;
            }
        } else if(value !== "00") {
            this.value = value;
        }
        this.component.setState({value: this.getValue()});
    }
    clearValue() {
        if(this.operation === "") {
            this.lastOperation = "";
        }
        this.value = "0";
        this.component.setState({value: this.getValue()});
    }
    getResult() {
        return this.result + " " + this.getOperationSymbol();
    }
    
    setOperation(operation) {
        if(this.operation !== "") {
            if(this.getValue() !== "0") {
                this.operate();
            }
        } else {
            this.result = this.value;
            this.value = "0";
        }
        
        this.operation = operation;

        this.component.setState({
            value: this.getValue(),
            result: this.getResult()
        });
    }
    getOperationSymbol() {
        if(this.operation === "*") {
            return "x";
        }

        return this.operation;
    }

    operate() {
        this.lastValue = this.value;
        this.lastOperation = this.operation;

        const result = parseFloat(this.result);
        const value = parseFloat(this.value);
        if(this.operation === "%") {
            this.result = (result / 100) * value;
        } else {
            this.result = eval(result + this.operation + value);
        }
        this.value = "0";
    }

    done() {
        if(this.operation === "" && this.lastOperation === "") {
            return;
        }
        if(this.operation === "") {
            this.result = this.value;
            this.value = this.lastValue;
            this.operation = this.lastOperation;
        }
        this.operate();
        this.value = this.result;
        this.result = "";
        this.operation = "";

        this.component.setState({
            value: this.getValue(),
            result: this.getResult()
        });
    }
    clearAll() {
        
        this.value = "0";
        this.result = "";
        this.operation = "";
        this.lastValue = this.value;
        this.lastOperation = this.operation;

        this.component.setState({
            value: this.getValue(),
            result: this.getResult()
        });
    }
    setComponent(component) {
        this.component = component;
    }
}