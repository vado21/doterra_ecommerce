import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { useEffect, useState } from 'react';
import { fetchProducts,deleteProduct } from '../utils/api';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import { FormControl, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
import { Loader } from '../common/Loader'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    padding: '4em'
  },
  banner: {
    width: 950,
    height: '90vh',
    backgroundImage: `url('https://media.allure.com/photos/5f13724c3f61cc00098d16f7/16:9/w_1600,c_limit/essential-oil-diffuser-social.jpg')`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  
}));

export default function LandingDetails() {
    const classes = useStyles();

    return (
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.banner}>
          <Grid container justify="center">
            <Typography variant="h3">Descubre la magia de los aceites esenciales</Typography>
            
          </Grid>
          <Grid container justify="center">
          <Link {...{
            component: RouterLink,
            to: "/shop/productos",
            color: "inherit",
            style: { textDecoration: "none" },
          }}>
              <Button variant="contained" color="secondary">
                Ver cat??logo de productos
              </Button>
            </Link>
          </Grid>

        </Grid>

        <Grid item xs={12}>
          <Grid container justify="center">
            <Typography variant="h2">??Qu?? son los aceites esenciales?</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item xs={8}>
              <Grid container justify="center">
                <Typography variant="body">Los aceites esenciales son compuestos arom??ticos vol??tiles naturales que se encuentran en las semillas, la corteza, los tallos, las ra??ces, las flores y otras partes de las plantas, se encargan de protegerlas y juegan un importante papel en la polinizaci??n.
    Si alguna vez has disfrutado del aroma de una rosa, entonces has experimentado las cualidades arom??ticas de los aceites esenciales que adem??s de proporcionar deliciosas fragancias tienen beneficios intr??nsecos que han sido usados por mucho tiempo en la preparaci??n de alimentos, tratamientos de belleza y pr??cticas alternativas para el bienestar.</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="center">
            <Typography variant="h2">??Qu?? es exactamente un compuesto arom??tico vol??til?</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item xs={8}>
              <Grid container justify="center">
                <Typography variant="body">Estos compuestos son peque??as mol??culas org??nicas que se denominan vol??tiles porque cambian de estado r??pidamente pasando del estado s??lido o l??quido al estado gaseoso al estar a temperatura ambiente.

Las propiedades f??sicas y qu??micas de los compuestos arom??ticos vol??tiles que componen los aceites esenciales, les permiten desplazarse r??pidamente a trav??s del aire e interactuar directamente con los sensores olfativos de la nariz. Estas propiedades hacen que los aceites esenciales sean ideales para la aromaterapia ???usando estos compuestos naturales para ayudar a mantener una mente y cuerpo en bienestar??? El tipo de compuestos arom??ticos vol??tiles presentes en un aceite esencial determina tanto su aroma como sus beneficios. As?? que cuando abras por primera vez una botella de aceite esencial, podr??s percibir instant??neamente su potente fragancia, que puede sentirse a??n a cierta distancia y recibir sus beneficios.

Hasta la fecha se han identificado m??s de 3,000 variedades de compuestos arom??ticos vol??tiles. La naturaleza de un aceite esencial var??a de planta a planta, dentro de familias bot??nicas y de especie a especie. La delicada proporci??n de constituyentes arom??ticos que se encuentran en cualquier aceite esencial es lo que les da su singularidad y beneficios espec??ficos.

A??n en los aceites esenciales puros su composici??n puede variar seg??n la hora del d??a, la estaci??n, la ubicaci??n geogr??fica, el m??todo y duraci??n de la destilaci??n, el a??o de cultivo y el clima, por lo que cada paso del proceso de producci??n es un determinante cr??tico de la calidad general del aceite esencial producido.

Los aceites esenciales pueden usarse en una amplia variedad de aplicaciones para el bienestar emocional y f??sico. Pueden usarse individualmente o en complejas mezclas, esto depender?? de la experiencia de cada usuario. T?? tambi??n puedes descubrir y aprender nuevas formas de usar los aceites esenciales doTERRA. Consulta los usos de los aceites esenciales y la informaci??n de cada uno en sus Fichas T??cnicas (PIP), solo tienes que dar click aqu?? y seleccionar la ficha de tu inter??s. </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OEnKOk4ad0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          </Grid>
        </Grid>
      </Grid>

      
    );
}