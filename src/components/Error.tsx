import React from 'react';

import { ResponsesConnectionError } from '@consta/uikit/ResponsesConnectionError';

// Since application is small and simple, decided to use same component for all types of errors
function Error() {
  return (
    <ResponsesConnectionError
      size="m"
      title="Что-то пошло не так..."
      description="При загрузке данных произошла ошибка, попробуйте подключиться позже..."
      actions={[]}
      className="error"
    />
  );
}

export default Error;
