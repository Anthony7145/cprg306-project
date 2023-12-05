// AppNavigator.js
import Link from 'next/link';

const AppNavigator = () => {
  return (
    <div>
      <Link href="/page">
        <a>Go to Home Page</a>
      </Link>
    </div>
  );
};

export default AppNavigator;
