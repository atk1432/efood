import validator from 'validator';


export const validation = {
    required(value) {
        if (!value)
            return 'Trường này là bắt buộc.';
    },

    max(value, max = 100) {
        if (!validator.isByteLength(value, { min: 0, max }))
            return `Trường này phải nhỏ hơn ${ max } kí tự`;
    },

    phone(value, locale = 'vi-VN') {
        if (!validator.isMobilePhone(value, locale )) {
            return 'Số điện thoại không hợp lệ';
        }
    }
}