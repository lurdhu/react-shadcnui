import './App.css'
import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/ui/theme-provider'
// import { Button } from './components/ui/button'
import Login from './Pages/Card'
import { DatePickerDemo } from './Pages/datepicker'


function App() {

  return (
    <>
      <div>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ModeToggle />
          {/* <Button>Click Me</Button> */}
          <Login />
          <DatePickerDemo />
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
