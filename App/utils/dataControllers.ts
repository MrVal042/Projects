import {Share, ShareContent} from 'react-native';

export const handleShare = (content: ShareContent | 'invite') => {
  const shareAction = (async () => {
    switch (content) {
      case 'invite':
        return await Share.share({
          message: 'Join me in creating and smashing targets.',
          title: 'I invite you to Dot app',
          url: 'https://dotinc.app/',
        });
      default:
        return await Share.share(content);
    }
  })();

  shareAction
    .then(result => {
      if (result.action === Share.dismissedAction) {
        return 'Dismissed';
      }
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          return 'Sharing';
        } else {
          return 'Success';
        }
      }
      return 'Sharing';
    })
    .catch(error => {
      handleError(error as IError);
      return 'Error';
    });
};

export const handleError = (error: IError) => {
  const failedKyc = 'KYC ratification key properties not successfully ratified';
  if (__DEV__) {
    console.log('IError:', {
      '_dev_ error:': error.data || 'unknown error',
      '_dev_ status:': error.status,
    });
  }
  let errorMessage = {message: '', description: ''};
  if (!error.data && error.message) {
    errorMessage = {message: error.message, description: ''};
  }
  if (error.data) {
    const message = error.data.displayMessage;
    const errorMessages = error.data.errorMessages;
    const description =
      errorMessages.length > 1 ? errorMessages[1] : errorMessages[0];
    if (message.includes(failedKyc)) {
      errorMessage = {
        description: description || '',
        message: 'KYC verification failed',
      };
    } else if (message && description) {
      errorMessage = {message, description};
    } else {
      errorMessage = {
        message: 'unknown error has occurred!',
        description: '',
      };
    }
  }

  return errorMessage;
};

interface DynamicObject {
  [key: string]: any;
}

interface SearchDataProps<ItemT> {
  query: string;
  queryItem: keyof ItemT | Array<keyof ItemT>;
  queryData: Array<ItemT> | undefined;
  sortItem?: keyof ItemT;
}

export const searchData = <ItemT extends DynamicObject>({
  queryData,
  query,
  queryItem,
  sortItem,
}: SearchDataProps<ItemT>) => {
  const sortBy = typeof queryItem === 'string' ? queryItem : sortItem || 'name';
  if (!query) {
    return queryData?.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }

  return queryData
    ?.filter(item => {
      if (typeof queryItem === 'string') {
        const result = item[queryItem]
          ?.toLowerCase()
          .includes(query.toLowerCase());
        return result;
      } else if (Array.isArray(queryItem)) {
        const result2 = queryItem.find(lst =>
          item[lst]?.toLowerCase().includes(query.toLowerCase()),
        );
        return result2;
      }
    })
    ?.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
};


