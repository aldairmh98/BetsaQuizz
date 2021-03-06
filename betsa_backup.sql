--
-- PostgreSQL database dump
--

-- Dumped from database version 10.6 (Ubuntu 10.6-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.6 (Ubuntu 10.6-0ubuntu0.18.04.1)

-- Started on 2018-12-30 22:59:39 CST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 13081)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2989 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 198 (class 1259 OID 16516)
-- Name: Pregunta; Type: TABLE; Schema: public; Owner: betsa
--

CREATE TABLE public."Pregunta" (
    id integer NOT NULL,
    pregunta character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Pregunta" OWNER TO betsa;

--
-- TOC entry 197 (class 1259 OID 16514)
-- Name: Pregunta_id_seq; Type: SEQUENCE; Schema: public; Owner: betsa
--

CREATE SEQUENCE public."Pregunta_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Pregunta_id_seq" OWNER TO betsa;

--
-- TOC entry 2990 (class 0 OID 0)
-- Dependencies: 197
-- Name: Pregunta_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: betsa
--

ALTER SEQUENCE public."Pregunta_id_seq" OWNED BY public."Pregunta".id;


--
-- TOC entry 200 (class 1259 OID 16524)
-- Name: Respuesta; Type: TABLE; Schema: public; Owner: betsa
--

CREATE TABLE public."Respuesta" (
    id integer NOT NULL,
    respuesta character varying(255),
    bandera boolean,
    id_pregunta integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Respuesta" OWNER TO betsa;

--
-- TOC entry 199 (class 1259 OID 16522)
-- Name: Respuesta_id_seq; Type: SEQUENCE; Schema: public; Owner: betsa
--

CREATE SEQUENCE public."Respuesta_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Respuesta_id_seq" OWNER TO betsa;

--
-- TOC entry 2991 (class 0 OID 0)
-- Dependencies: 199
-- Name: Respuesta_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: betsa
--

ALTER SEQUENCE public."Respuesta_id_seq" OWNED BY public."Respuesta".id;


--
-- TOC entry 196 (class 1259 OID 16509)
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: betsa
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO betsa;

--
-- TOC entry 202 (class 1259 OID 16532)
-- Name: Usuarios; Type: TABLE; Schema: public; Owner: betsa
--

CREATE TABLE public."Usuarios" (
    id integer NOT NULL,
    username character varying(255),
    email character varying(255),
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Usuarios" OWNER TO betsa;

--
-- TOC entry 201 (class 1259 OID 16530)
-- Name: Usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: betsa
--

CREATE SEQUENCE public."Usuarios_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Usuarios_id_seq" OWNER TO betsa;

--
-- TOC entry 2992 (class 0 OID 0)
-- Dependencies: 201
-- Name: Usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: betsa
--

ALTER SEQUENCE public."Usuarios_id_seq" OWNED BY public."Usuarios".id;


--
-- TOC entry 2843 (class 2604 OID 16519)
-- Name: Pregunta id; Type: DEFAULT; Schema: public; Owner: betsa
--

ALTER TABLE ONLY public."Pregunta" ALTER COLUMN id SET DEFAULT nextval('public."Pregunta_id_seq"'::regclass);


--
-- TOC entry 2844 (class 2604 OID 16527)
-- Name: Respuesta id; Type: DEFAULT; Schema: public; Owner: betsa
--

ALTER TABLE ONLY public."Respuesta" ALTER COLUMN id SET DEFAULT nextval('public."Respuesta_id_seq"'::regclass);


--
-- TOC entry 2845 (class 2604 OID 16535)
-- Name: Usuarios id; Type: DEFAULT; Schema: public; Owner: betsa
--

ALTER TABLE ONLY public."Usuarios" ALTER COLUMN id SET DEFAULT nextval('public."Usuarios_id_seq"'::regclass);


--
-- TOC entry 2977 (class 0 OID 16516)
-- Dependencies: 198
-- Data for Name: Pregunta; Type: TABLE DATA; Schema: public; Owner: betsa
--

INSERT INTO public."Pregunta" (id, pregunta, "createdAt", "updatedAt") VALUES (1, '¿Cuáles son los cinco tipos de sabores primarios?', '2018-12-30 17:40:39.202-06', '2018-12-30 17:40:39.202-06');
INSERT INTO public."Pregunta" (id, pregunta, "createdAt", "updatedAt") VALUES (2, '¿Cuál es el lugar más frío de la tierra?', '2018-12-30 17:44:04.506-06', '2018-12-30 17:44:04.506-06');
INSERT INTO public."Pregunta" (id, pregunta, "createdAt", "updatedAt") VALUES (3, '¿En qué continente está Ecuador?', '2018-12-30 18:20:49.786-06', '2018-12-30 18:20:49.786-06');
INSERT INTO public."Pregunta" (id, pregunta, "createdAt", "updatedAt") VALUES (4, '¿Qué tipo de animal es la ballena?', '2018-12-30 18:21:45.644-06', '2018-12-30 18:21:45.644-06');
INSERT INTO public."Pregunta" (id, pregunta, "createdAt", "updatedAt") VALUES (5, '¿Qué cantidad de huesos tiene el cuerpo humano adulto promedio?', '2018-12-30 18:23:08.202-06', '2018-12-30 18:23:08.202-06');
INSERT INTO public."Pregunta" (id, pregunta, "createdAt", "updatedAt") VALUES (6, ' ¿Quién pintó “la última cena”?', '2018-12-30 18:24:36.957-06', '2018-12-30 18:24:36.957-06');
INSERT INTO public."Pregunta" (id, pregunta, "createdAt", "updatedAt") VALUES (7, '¿Cómo se le denomina al resultado de una multipicación?', '2018-12-30 18:32:19.543-06', '2018-12-30 18:32:19.543-06');
INSERT INTO public."Pregunta" (id, pregunta, "createdAt", "updatedAt") VALUES (8, '¿Resultado de la siguiente operación (a+b)²?', '2018-12-30 18:35:16.598-06', '2018-12-30 18:35:16.598-06');
INSERT INTO public."Pregunta" (id, pregunta, "createdAt", "updatedAt") VALUES (9, '¿Qué deporte practicaba Michael Jordan?', '2018-12-30 18:36:59.895-06', '2018-12-30 18:36:59.895-06');
INSERT INTO public."Pregunta" (id, pregunta, "createdAt", "updatedAt") VALUES (10, '¿Tercer planeta del sistema solar?', '2018-12-30 18:38:10.315-06', '2018-12-30 18:38:10.315-06');
INSERT INTO public."Pregunta" (id, pregunta, "createdAt", "updatedAt") VALUES (11, ' ¿Qué país tiene forma de bota?', '2018-12-30 18:45:46.602-06', '2018-12-30 18:45:46.602-06');


--
-- TOC entry 2979 (class 0 OID 16524)
-- Dependencies: 200
-- Data for Name: Respuesta; Type: TABLE DATA; Schema: public; Owner: betsa
--

INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (1, 'dulce, amargo, ácido, salado y umami.', true, 1, '2018-12-30 17:40:39.344-06', '2018-12-30 17:40:39.344-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (2, 'dulce, amargo, ácido, salado y picante.', false, 1, '2018-12-30 17:40:39.345-06', '2018-12-30 17:40:39.345-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (3, 'dulce, amargo, salado, emapalagoso y picante.', false, 1, '2018-12-30 17:40:39.345-06', '2018-12-30 17:40:39.345-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (4, 'El polo norte.', false, 2, '2018-12-30 17:44:04.54-06', '2018-12-30 17:44:04.54-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (5, 'Alaska', false, 2, '2018-12-30 17:44:04.54-06', '2018-12-30 17:44:04.54-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (6, 'La Antártida.', true, 2, '2018-12-30 17:44:04.541-06', '2018-12-30 17:44:04.541-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (7, 'Europa', false, 3, '2018-12-30 18:20:50.218-06', '2018-12-30 18:20:50.218-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (8, 'Latinoamérica', false, 3, '2018-12-30 18:20:50.219-06', '2018-12-30 18:20:50.219-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (9, 'América', true, 3, '2018-12-30 18:20:50.219-06', '2018-12-30 18:20:50.219-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (10, 'Ovíparo', false, 4, '2018-12-30 18:21:45.68-06', '2018-12-30 18:21:45.68-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (11, 'Vivíparo', true, 4, '2018-12-30 18:21:45.681-06', '2018-12-30 18:21:45.681-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (12, 'Mamífero', true, 4, '2018-12-30 18:21:45.681-06', '2018-12-30 18:21:45.681-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (13, '206', true, 5, '2018-12-30 18:23:08.241-06', '2018-12-30 18:23:08.241-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (14, '300', false, 5, '2018-12-30 18:23:08.242-06', '2018-12-30 18:23:08.242-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (15, '209', false, 5, '2018-12-30 18:23:08.242-06', '2018-12-30 18:23:08.242-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (16, 'Picasso', false, 6, '2018-12-30 18:24:36.996-06', '2018-12-30 18:24:36.996-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (17, 'Leonardo da Vinci', true, 6, '2018-12-30 18:24:36.996-06', '2018-12-30 18:24:36.996-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (18, 'Diego Rivera', false, 6, '2018-12-30 18:24:36.997-06', '2018-12-30 18:24:36.997-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (19, 'Producto', true, 7, '2018-12-30 18:32:19.581-06', '2018-12-30 18:32:19.581-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (20, 'Múltiplo', false, 7, '2018-12-30 18:32:19.582-06', '2018-12-30 18:32:19.582-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (21, 'Resultado', false, 7, '2018-12-30 18:32:19.582-06', '2018-12-30 18:32:19.582-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (22, 'a²+2ab+b²', true, 8, '2018-12-30 18:35:16.641-06', '2018-12-30 18:35:16.641-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (23, 'ab⁴', false, 8, '2018-12-30 18:35:16.641-06', '2018-12-30 18:35:16.641-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (24, 'a²+b²', false, 8, '2018-12-30 18:35:16.641-06', '2018-12-30 18:35:16.641-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (25, 'Baloncesto', true, 9, '2018-12-30 18:36:59.929-06', '2018-12-30 18:36:59.929-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (26, 'Futbol', false, 9, '2018-12-30 18:36:59.929-06', '2018-12-30 18:36:59.929-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (27, 'Voleiball', false, 9, '2018-12-30 18:36:59.929-06', '2018-12-30 18:36:59.929-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (28, 'Venús', false, 10, '2018-12-30 18:38:10.351-06', '2018-12-30 18:38:10.351-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (29, 'Tierra', true, 10, '2018-12-30 18:38:10.351-06', '2018-12-30 18:38:10.351-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (30, 'Marte', false, 10, '2018-12-30 18:38:10.351-06', '2018-12-30 18:38:10.351-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (31, 'México', false, 11, '2018-12-30 18:45:46.66-06', '2018-12-30 18:45:46.66-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (32, 'Italia', true, 11, '2018-12-30 18:45:46.661-06', '2018-12-30 18:45:46.661-06');
INSERT INTO public."Respuesta" (id, respuesta, bandera, id_pregunta, "createdAt", "updatedAt") VALUES (33, 'Francia', false, 11, '2018-12-30 18:45:46.661-06', '2018-12-30 18:45:46.661-06');


--
-- TOC entry 2975 (class 0 OID 16509)
-- Dependencies: 196
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: betsa
--

INSERT INTO public."SequelizeMeta" (name) VALUES ('20181230221847-create-pregunta.js');
INSERT INTO public."SequelizeMeta" (name) VALUES ('20181230221945-create-respuesta.js');
INSERT INTO public."SequelizeMeta" (name) VALUES ('20181230222039-create-usuario.js');
INSERT INTO public."SequelizeMeta" (name) VALUES ('20181230230640-create-pregunta.js');
INSERT INTO public."SequelizeMeta" (name) VALUES ('20181230230719-create-pregunta.js');
INSERT INTO public."SequelizeMeta" (name) VALUES ('20181230230735-create-usuario.js');


--
-- TOC entry 2981 (class 0 OID 16532)
-- Dependencies: 202
-- Data for Name: Usuarios; Type: TABLE DATA; Schema: public; Owner: betsa
--



--
-- TOC entry 2993 (class 0 OID 0)
-- Dependencies: 197
-- Name: Pregunta_id_seq; Type: SEQUENCE SET; Schema: public; Owner: betsa
--

SELECT pg_catalog.setval('public."Pregunta_id_seq"', 11, true);


--
-- TOC entry 2994 (class 0 OID 0)
-- Dependencies: 199
-- Name: Respuesta_id_seq; Type: SEQUENCE SET; Schema: public; Owner: betsa
--

SELECT pg_catalog.setval('public."Respuesta_id_seq"', 33, true);


--
-- TOC entry 2995 (class 0 OID 0)
-- Dependencies: 201
-- Name: Usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: betsa
--

SELECT pg_catalog.setval('public."Usuarios_id_seq"', 1, false);


--
-- TOC entry 2849 (class 2606 OID 16521)
-- Name: Pregunta Pregunta_pkey; Type: CONSTRAINT; Schema: public; Owner: betsa
--

ALTER TABLE ONLY public."Pregunta"
    ADD CONSTRAINT "Pregunta_pkey" PRIMARY KEY (id);


--
-- TOC entry 2851 (class 2606 OID 16529)
-- Name: Respuesta Respuesta_pkey; Type: CONSTRAINT; Schema: public; Owner: betsa
--

ALTER TABLE ONLY public."Respuesta"
    ADD CONSTRAINT "Respuesta_pkey" PRIMARY KEY (id);


--
-- TOC entry 2847 (class 2606 OID 16513)
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: betsa
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- TOC entry 2853 (class 2606 OID 16540)
-- Name: Usuarios Usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: betsa
--

ALTER TABLE ONLY public."Usuarios"
    ADD CONSTRAINT "Usuarios_pkey" PRIMARY KEY (id);


-- Completed on 2018-12-30 22:59:40 CST

--
-- PostgreSQL database dump complete
--

