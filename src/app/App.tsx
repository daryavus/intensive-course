import { ThemeProvider } from "../shared/lib/theme/ThemeContext";
import { MainLayout } from "../shared/layouts/MainLayout";

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <div></div>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
