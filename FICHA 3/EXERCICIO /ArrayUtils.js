module.exports = {
    isEmpty: function (array) {
        return array.length == 0;
    },

    max: function (array) {
        var max = array[0];

        for (let i = 0; i < array.length; i++) {
            
            var indice_atual = array[i];

            if (max < indice_atual) {
                max = indice_atual;
            }
        }
        return max;
    },

    min: function (array) {
        var min = array[0];

        for (let i = 0; i < array.length; i++) {
            
            var indice_atual = array[i];
            
            if (indice_atual < min) {
                min = indice_atual;
            }
        }
        return min;
    },

    media: function (array) {
        var avg = 0;

        for (let i = 0; i < array.length; i++) {
            avg += array[i];
        }

        avg /= array.length;
        
        return avg;
    },

    indexOf: function (array, number) {
        var array_out = [];

        for (let i = 0; i < array.length; i++) {
            var indice_atual = array[i];
            var indice = i;

            if (number == indice_atual) {
                array_out.push(indice);
            }
        }
        for (let j = 0; j < array_out.length; j++) {
            // console.log('O numero se encontra na posição', array_out[j]);
        }
        return ''
    },

    subArray: function (array, startIndex, endIndex) {
        var sublista = [];

        for (let i = startIndex; i <= endIndex; i++) {
            var value = array[i];

            sublista.push(value);
        }
        // console.log('Subarray --->', sublista);
    },

    isSameLength: function (a1, a2) {
        return a1.length == a2.length;
    },

    reverse: function (array) {
        var reverse_array = [];
        
        for (let i = array.length - 1; i >= 0; i--) {
            reverse_array.push(array[i]);
        }
        // console.log(reverse_array);
    },

    swap: function (array, index1, index2) {
        value_temp = array[index1];

        array[index1] = array[index2];

        array[index2] = value_temp;
        
        return array
    },

    contains: function (array, value) {
        return array.includes(value)
    },

    concatenate: function (a1, a2) {
        var new_array = [];

        for (let i = 0; i < a1.length; i++) {
            var elemento = a1[i];
            new_array.push(elemento);
        }
        for (let j = 0; j < a2.length; j++) {
            var elemento = a2[j];
            new_array.push(elemento);
        }
        return new_array
    }
};