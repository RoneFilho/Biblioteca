import React from "react";
import { Box } from "@material-ui/core";
import { Input } from "features/biblioteca/components/Input";
import { Button } from "features/biblioteca/components/Button";
import { List } from "features/biblioteca/components/List";
import { Text } from "features/biblioteca/components/Text";
import Api from "Service/Api";

export const Biblioteca: React.FC = () => {
  const [data, setData] = React.useState([]);
  const [text, setText] = React.useState("");
  const [error, setError] = React.useState("");

  async function searchRequest() {
    await Api.get(text)
      .then((response) => {
        setData(response.data.hits);
        if (response.data.hits.length === 0) {
          setError("Nenhum registro encontrado");
        }
      })
      .catch((error) => {
        console.log("Não foi possivel fazer a requisição pelo erro" + error);
      });
  }
  return (
    <Box className="Screen">
      <h1>Biblioteca OSB</h1>
      <Box>
        <Input setText={setText} />
        <Button onclick={searchRequest} />
      </Box>
      <Box className="Content">
        {data.length ? (
          data.map((response: any, key: number) => (
            <List
              author={response.author ? response.author : "Autor não informado"}
              title={response.title ? response.title : "Título não informado"}
              url={response.url ? response.url : "Url não informado"}
              key={key}
            />))) : (<Text title={error} />)}
      </Box>
    </Box>
  );
};
