
    function countFunc(count) {
        let btnPlus = count.querySelector('.card-info__plus');
        let btnMinus = count.querySelector('.card-info__minus');
        let field = count.querySelector('.card-info__number');
        let fieldValue = parseFloat(field.value, 10);//Прообразовываем к числу
        let max = field.getAttribute("data-max")
        btnMinus.addEventListener('click', function () {

            if (fieldValue > 1) {
                fieldValue--;
                field.value = fieldValue;
            } else {
                return 1;
            }
        });
        btnPlus.addEventListener('click', function () {

            if(fieldValue < max){
                fieldValue++;
                field.value = fieldValue;
                console.log(field.value);
            }
        });

        field.addEventListener('keydown', function () {

            fieldValue = this.value || 0;
            if(fieldValue > max){
                this.value = max;
                console.log(this.value);
            }else if(fieldValue == 0){
                this.value = 1;
            }
        });

    }

    let counts = document.querySelectorAll('.card-info__quantity');
    counts.forEach(countFunc);
