import { type ComponentType, useState, useEffect } from 'react';
import { Spinner } from '../../ui/Spinner/Spinner';


export function withLoading<T extends object>(
  WrappedComponent: ComponentType<T>,
  loadingMessage = 'Загрузка...'
) {
  return function WithLoading(props: T) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return (
        <div className="loading-wrapper">
          <Spinner />
          <p>{loadingMessage}</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}