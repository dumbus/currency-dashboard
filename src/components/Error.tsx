import React from 'react';

import { ResponsesConnectionError } from '@consta/uikit/ResponsesConnectionError';

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
