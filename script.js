let calculator = {
    naxord: 0,
    operator: null,
    getInput: function()
    {
        return document.getElementById("numpad").value;
    },
    setInput: function(input)
    {
        document.getElementById("numpad").value = input;
    },
    onNum: function(num)
    {
        let input = this.getInput() + num;
        this.setInput(input);
    },
    onOp: function(op)
    {
        this.operator = op;
        this.naxord = this.getInput();
        this.setInput('');
    },
    onEq: function()
    {
        let cur = parseFloat(this.getInput());
        let prev = parseFloat(this.naxord);
        let answer = '';

        if (this.operator == '+')
        {
            answer = cur + prev;
        }
        else if(this.operator == '-')
        {
            answer = cur - prev;
        }         if (this.operator == '*')
            {
                answer = cur * prev;
            }
            else if(this.operator == '/')
                {
                    answer = prev / cur;
                }

        this.setInput(answer);
    }
};