import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({
            message: data.message,
          });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({
          demo: demo,
        });
      },
      // funcion que usa el ENDPOINT login para pasar los datos y acceder a la base de datos
      loginUsuario: async (email, password) => {
        try {
          let response = await axios.post(
            "https://3001-blancreyes-appreservame-butgdjsaqfi.ws-eu90.gitpod.io/api/login",
            {
              email: email,
              password: password,
            }
          );
          if (response.status === 200) {
            console.log(response.data.access_token);
            return true;
          }
        } catch (error) {
          console.log(error);
          if (error.response.status === 401) {
            alert(error.response.data);
          }

          return false;
        }

        console.log(response);
      },
    },
  };
};

export default getState;
