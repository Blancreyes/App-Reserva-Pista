import axios from "axios";
const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            url: "https://3001-blancreyes-appreservame-bmyprwe6egj.ws-eu92.gitpod.io",
            message: null,
            pistas: [],
            // {
            //   title: "Piscina",
            //   background: "white",
            //   initial: "white",
            // },
            // {
            //   title: "Pista Paddle",
            //   background: "white",
            //   initial: "white",
            // },
            // {
            //   title: "Pista Tenis",
            //   background: "white",
            //   initial: "white",
            // },
            // {
            //   title: "Campo de Futbol",
            //   background: "white",
            //   initial: "white",
            // },
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
                    const store = getStore();
                    const urlserver = store.url;
                    console.log(urlserver);
                    let response = await axios.post(urlserver + "/api/login", {
                        email: email,
                        password: password,
                    });
                    //   console.log("esta es la respuesta del Login:", response);
                    localStorage.setItem("token", response.data.access_token);
                    return true;
                } catch (error) {
                    console.log(error);
                    if (error.response.status >= 400) {
                        alert(error.response.data.msg);
                    }
                    return false;
                }
            },
            handleLogout: () => {
                //Aquí habría que colocar la lógica para cerrar la sesión del usuario y  colocar setLoggedIn a false
                // localStorage.removeItem("token");
                localStorage.removeItem("token");
            },
            altaUsuario: async (name, lastname, email, password) => {
                const store = getStore();
                const urlserver = store.url;
                // console.log(urlserver);
                try {
                    let response = await axios.post(urlserver + "/api/user", {
                        name: name,
                        lastname: lastname,
                        email: email,
                        password: password,
                    });
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
            compruebaUsuario: async () => {
                const store = getStore();
                const urlserver = store.url;
                try {
                    const mytoken = localStorage.getItem("token");
                    // console.log(mytoken);
                    let response = await axios.get(urlserver + "/api/profile", {
                        headers: {
                            Authorization: `Bearer ${mytoken}`,
                        },
                    });
                    //   console.log("esta es la respuesta de compruebaUsuario:", response);
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
            recover_password: async (email) => {
                try {
                    const store = getStore();
                    const urlserver = store.url;
                    console.log(urlserver);
                    let response = await axios.post(urlserver + "/api/forgotpassword", {
                        email: email,
                    });
                    console.log(response);
                    // localStorage.setItem("token", response.data.access_token);
                    return true;
                } catch (error) {
                    console.log(error);
                    if (error.response.status >= 400) {
                        alert(error.response.data.msg);
                    }
                    return false;
                }
            },
            reservarPista: async (dia, hora, instalacion) => {
                const store = getStore();
                const urlserver = store.url;
                try {
                    const mytoken = localStorage.getItem("token");
                    let response = await axios.post(
                        urlserver + "/api/reservas", {
                            pistas_id: instalacion,
                            startTime: dia + hora,
                        }, {
                            headers: {
                                Authorization: `Bearer ${mytoken}`,
                            },
                        }
                    );
                    console.log("esta es la respuesta de reservarPista: ", response);
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
            obtenerPistas: async () => {
                const store = getStore();
                const urlserver = store.url;
                try {
                    let response = await axios.get(urlserver + "/api/pistas");
                    setStore({
                        pistas: response.data,
                    });
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
            obtenerInfoPistas: async (id_pista) => {
                const store = getStore();
                const urlserver = store.url;
                try {
                    let response = await axios.get(
                        urlserver + "/api/infopista/" + id_pista
                    );
                    // setStore({ pistas: response.data });
                    // console.log("respuesta de infoPistas", response);
                    return response.data.result.nombre;
                } catch (error) {
                    console.log(error);
                    return "Hay un error al obtener el nombre";
                }
            },
        },
    };
};
export default getState;