-- Table: public.bst_info

-- DROP TABLE IF EXISTS public.bst_info;

CREATE TABLE IF NOT EXISTS public.bst_info
(
    input character varying COLLATE pg_catalog."default" NOT NULL,
    output character varying COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.bst_info
    OWNER to postgres;