


export default function Footer() {
    return (
        <div className="flex flex-row justify-center fixed z-30 bottom-4 w-full">
            <small className="text-gray-500 text-xs">
                © Página criada por {}
                <a
                    href="https://www.linkedin.com/in/sergiokoerich/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-Blue">         
                    Sérgio Koerich. 
                
                </a>
                {} Todos os direitos reservados.
            </small>
        </div>
  );
}