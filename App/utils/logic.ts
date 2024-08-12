import {Colors} from '@constant';

export const convertArrToObj = (arr: any[]) => {
  return arr.reduce((acc, curr) => ({...acc, ...curr}), {});
};

export const getToastUI = (
  type: ToastState['status'],
): {backgroundColor: string; icon: IconName} => {
  switch (type) {
    case 'success':
      return {
        backgroundColor: Colors.green,
        icon: 'success',
      };
    case 'error':
      return {
        backgroundColor: Colors.redSalsa,
        icon: 'close-round',
      };
    case 'warning':
      return {
        backgroundColor: Colors.yellow,
        icon: 'warning',
      };
    case 'info':
      return {
        backgroundColor: Colors.primary,
        icon: 'info',
      };
    default:
      return {
        backgroundColor: Colors.accent,
        icon: 'info',
      };
  }
};

export const percentageCalculator = ({
  total,
  current,
}: {
  total?: number;
  current?: number;
}) => {
  if (current && total) {
    const spent = total - current;
    const percentage = (spent * 100) / total;

    return {percentage, spent, total};
  } else {
    return {percentage: 0, spent: 0, total: 0};
  }
};
