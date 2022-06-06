import { toast } from 'react-toastify';


class Globals{
  
    soloNumeros = e => {
        var key = window.Event ? e.which : e.keyCode;
        var condition = key >= 48 && key <= 57;
        if (!condition) {
          e.preventDefault();
        }
      };
    
    getStatus = status => {
      switch(status){
        case '0':
          return 'Cancelado';
        case '1':
          return 'Completado';
        case '2':
          return 'Pendiente';
        case '3':
          return 'Sin fondos';
        default:
      }
    };
    formatMiles = (n, decimals = true) => {
        var c, d, t, j, s, i;
        c = isNaN((c = Math.abs(c))) ? 2 : c;
        d = d === undefined ? "," : d;
        t = t === undefined ? "." : t;
        s = n < 0 ? "-" : "";
        i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c))));
        j = (j = i.length) > 3 ? j % 3 : 0;
    
        return (
          s +
          (j ? i.substr(0, j) + t : "") +
          i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
          (c
            ? d +
            Math.abs(n - i)
              .toFixed(c)
              .slice(2)
            : "")
        );
    };
    
    showSuccess = message => {
        toast.success(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
      };
    
    showWarning = message => {
        toast.error(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    
    showInformation = message => {
        toast.info(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    
    showError = message => {
        toast.error(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
      };
}

export default new Globals();