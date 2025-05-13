const App = () => {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-900 font-sans'>
      <header className='bg-white shadow-md p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>DesignInFlow</h1>
          <nav className='space-x-4'>
            <a href='#home' className='hover:text-blue-600'>
              Home
            </a>
            <a href='#about' className='hover:text-blue-600'>
              About
            </a>
            <a href='#projects' className='hover:text-blue-600'>
              Projects
            </a>
            <a href='#contact' className='hover:text-blue-600'>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className='container mx-auto p-8'>
        <section id='home' className='py-20 text-center'>
          <h2 className='text-4xl font-semibold'>Welcome to DesignInFlow</h2>
          <p className='mt-4 text-lg'>
            Creating seamless and beautiful web experiences.
          </p>
        </section>

        <section id='about' className='py-20'>
          <h2 className='text-3xl font-semibold'>About Me</h2>
          <p className='mt-4'>
            I’m Jordan, a web designer and developer from Madison, WI.
          </p>
        </section>

        <section id='projects' className='py-20'>
          <h2 className='text-3xl font-semibold'>My Projects</h2>
          <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
            <div className='bg-white p-4 shadow-md rounded-md'>
              <h3 className='font-bold'>Project One</h3>
              <p className='text-sm'>Description of the project.</p>
            </div>
            <div className='bg-white p-4 shadow-md rounded-md'>
              <h3 className='font-bold'>Project Two</h3>
              <p className='text-sm'>Description of the project.</p>
            </div>
            <div className='bg-white p-4 shadow-md rounded-md'>
              <h3 className='font-bold'>Project Three</h3>
              <p className='text-sm'>Description of the project.</p>
            </div>
          </div>
        </section>

        <section id='contact' className='py-20 text-center'>
          <h2 className='text-3xl font-semibold'>Get In Touch</h2>
          <p className='mt-4'>Email me at jordan@designinflow.dev</p>
        </section>
      </main>

      <footer className='bg-gray-800 text-white p-4 text-center'>
        <p>
          &copy; {new Date().getFullYear()} DesignInFlow. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
